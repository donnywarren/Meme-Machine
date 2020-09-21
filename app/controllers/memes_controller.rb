class MemesController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_meme, only: [:update, :destroy]

  # GET /memes
  def index
    @memes = Meme.all
    render json: @memes, include: [:image, :text], status: :ok
  end

  # GET /memes/1
  def show
    @meme = Meme.find(params[:id])
    render json: @meme, include: [:image, :text], status: :ok
  end

  # POST /memes
  def create
    @meme = Meme.new(meme_params)
    @meme.user = @current_user #method from application_controller.rb authorize_request - provides user id associated with token of logged in user

    if @meme.save
      render json: @meme, status: :created
    else
      render json: @meme.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /memes/1
  def update
    if @meme.update(meme_params)
      render json: @meme
    else
      render json: @meme.errors, status: :unprocessable_entity
    end
  end

  # DELETE /memes/1
  def destroy
    @meme.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_meme
      @meme = @current_user.memes.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def meme_params
      params.require(:meme).permit(:text_id, :image_id) #don't need user_id because @current_user is passed from application_controller.rb - see above
    end
end
