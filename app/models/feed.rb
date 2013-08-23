require 'httparty'

class Feed
  include HTTParty
  
  def self.instagram
    Rails.cache.fetch("instagram", :expires_in => 10.minutes) do
      HTTParty.get("https://api.instagram.com/v1/tags/aumccollege/media/recent",
      :query => {
        :access_token => Figaro.env.INSTAGRAM_ACCESS_TOKEN
      })["data"]
      # reject{|i| i["tags"].include? "p"}.first["images"]["standard_resolution"]["url"]
    end
  end
end