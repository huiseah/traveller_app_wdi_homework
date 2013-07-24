module ApplicationHelper
  def is_admin?
    @auth.present? && @auth.is_admin?
  end

  def intellinav
    links = ''
       links << "<li>#{link_to('Home', root_path)}</li>"
    if @auth.present?
      if @auth.is_admin
        links << "<li>#{link_to('Show Users', users_path)}</li>"
        links << "<li>#{link_to('Coffeeshops', coffeeshops_path)}</li>"
      end
      links << "<li>#{link_to('Logout', logout_path, :method => :get, :confirm => 'Really?')}</li>"
    else

      links << "<li>#{link_to('Join Us', new_user_path)}</li>"
      links << "<li>#{link_to('Login', login_path)}</li>"

    end

    links
  end
end

# module ApplicationHelper
# 	def intellinav
# 		if @auth.present?
# 			link_to(@auth.email, logout_path, :method => :delete)

# 		else
# 			link_to('Login', login_path)
# 		end
# 	end
# end
