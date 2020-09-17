class MemesController < ApplicationController
  before_action :set_meme, only: [:show, :update, :destroy]

  # GET /memes
  def index
    @memes = Meme.all

    render json: @memes
  end

  # GET /memes/1
  def show
    render json: @meme
  end

  # POST /memes
  def create
    @meme = Meme.new(meme_params)

    if @meme.save
      render json: @meme, status: :created, location: @meme
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
      @meme = Meme.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def meme_params
      params.require(:meme).permit(:user_id, :text_id, :image_id)
    end
end
