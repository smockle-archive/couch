class InstagramController < ApplicationController
  def index
  end
  
  def feed
    @photos = Feed.instagram
    render :partial => "feed"
  end
end
