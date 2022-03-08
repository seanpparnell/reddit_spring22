class Sub < ApplicationRecord
  validates :title, presence: true
  validates :title, length: {minimum: 2}
end
