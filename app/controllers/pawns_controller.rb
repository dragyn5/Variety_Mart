class PawnsController < ApplicationController

  def index
    @pawns = Pawn.all
    if params[:search_number]
      @pawns = Pawn.find_by(pawn_number: params[:search_number])
    else
      @pawns = Pawn.all.order("created_at DESC")
    end
  end

  def new
    @pawn = Pawn.new  
  end

  def edit
    @pawn = Pawn.find(params[:id])
  end


  def search
    if params[:search_number] && params[:search_name]
      @pawn = Pawn.find_by(pawn_number: params[:search_number])
      if @pawn.name === params[:search_name]
        redirect_to @pawn
      end
    end
  end

  def create
    @pawn = Pawn.new(pawn_params)
   
    if @pawn.save
      redirect_to @pawn
    else
      render 'new'
    end
  end

  def show
    @pawn = Pawn.find(params[:id])
  end

  def update
    @pawn = Pawn.find(params[:id])
   
    if @pawn.update(pawn_params)
      redirect_to @pawn
    else
      render 'edit'
    end
  end

  def destroy
    @pawn = Pawn.find(params[:id])
    @pawn.destroy
   
    redirect_to pawns_path
  end


  private
  def pawn_params
    params.require(:pawn).permit(:pawn_number, :name, :principle)
  end
end
