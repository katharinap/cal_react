# == Schema Information
#
# Table name: appointments
#
#  id         :integer          not null, primary key
#  title      :string
#  appt_time  :datetime
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Appointment < ApplicationRecord
end
