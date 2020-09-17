require 'test_helper'

class MemesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @meme = memes(:one)
  end

  test "should get index" do
    get memes_url, as: :json
    assert_response :success
  end

  test "should create meme" do
    assert_difference('Meme.count') do
      post memes_url, params: { meme: { image_id: @meme.image_id, text_id: @meme.text_id, user_id: @meme.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show meme" do
    get meme_url(@meme), as: :json
    assert_response :success
  end

  test "should update meme" do
    patch meme_url(@meme), params: { meme: { image_id: @meme.image_id, text_id: @meme.text_id, user_id: @meme.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy meme" do
    assert_difference('Meme.count', -1) do
      delete meme_url(@meme), as: :json
    end

    assert_response 204
  end
end
