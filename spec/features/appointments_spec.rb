require "rails_helper"

RSpec.feature "appointments", type: :feature, js: true do
  before do
    now = Time.local(2017, 11, 1, 12, 0, 0)
    Timecop.freeze(now)
    Appointment.create(title: 'Some Appointment', appt_time: now)
  end
  
  scenario "user can create a new appointment" do
    visit "/"
    fill_in "title", :with => "My Super Important Appointment"
    find('td', text: '15').click
    find('td', text: '12:00 AM').click

    # [hr up, hr down, minute up, minute down, am/pm toggle (2x)]
    time_buttons = all(:xpath, '//span[@class="rdtBtn"]')
    time_buttons[0].click
    15.times { time_buttons[2].click }
    time_buttons[4].click
    
    click_button('Make Appointment')

    expect(page).to have_text("Some Appointment November 01 2017, 12:00 pm")
    expect(page).to have_text("My Super Important Appointment November 15 2017, 1:15 pm")
  end
end
