module Articles
  class ListHandler
    def initialize(params)
      @scope = params[:scope] || 
      @search = params || {}
      #  / byebug
    end

    def perform
      @query = Article.all
      apply_search
      @query
    end
    def apply_search
      if @search[:username].present?
        @query = @query.joins(:user).where('lower(username) LIKE ?', "%#{@search[:username].downcase}%")   
      end
      if @search[:adress].present?
        @query = @query.joins(:user =>[:user_adress =>:adress]).where('lower(street_name) LIKE ?', "%#{@search[:adress].downcase}%")   
      end
    

    end
  end 
end