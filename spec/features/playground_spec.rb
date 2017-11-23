require 'rails_helper'

RSpec.feature 'playground', type: :feature, js: true do
  before do
    now = Time.local(2017, 11, 1, 12, 0, 0)
    Timecop.freeze(now)
  end

  scenario 'jsx code works' do
    visit '/playground'
    # save_screenshot('/tmp/playground.png', :full => true)
    expect(page).to have_text('Playground')
    expect(page).to have_text('Hello, world!')
  end
end
