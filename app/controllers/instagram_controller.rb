class InstagramController < ApplicationController
  def index
    @photos = Feed.instagram
  end
end
