User.destroy_all
Coffeeshop.destroy_all


u1 = User.create(:name => 'Bob', :email => 'bob@gmail.com', :password => 'a', :password_confirmation => 'a')
u2 = User.create(:name => 'Sue', :email => 'sue@gmail.com', :password => 'a', :password_confirmation => 'a')
u3 = User.create(:name => 'admin', :email => 'admin@gmail.com', :password => 'a', :password_confirmation => 'a')

u3.is_admin = true
u3.save

c1 = Coffeeshop.create(:name => 'Altar Lounge', :address => '1/195 Bondi Rd Bondi NSW')
c2 = Coffeeshop.create(:name => 'The Wholefood Cafe', :address => '225 Bondi Rd Bondi NSW')
c3 = Coffeeshop.create(:name => 'The Flying Squirrel', :address => '249 Bondi Rd Bondi NSW')
c4 = Coffeeshop.create(:name => 'Bondi Massive Restaurant and Cafe', :address => '2/8 Campbell Parade Bondi NSW')
c5 = Coffeeshop.create(:name => 'Katipo Coffee House Deluxe', :address => '101 Bondi Rd Bondi NSW')
c6 = Coffeeshop.create(:name => 'Favoloso Cafe Deli Store', :address => '43-45 Belgrave St Bronte NSW')
c7 = Coffeeshop.create(:name => 'M Deli Cafe', :address => '32A Fletcher St Bondi NSW')
c8 = Coffeeshop.create(:name => 'Skinny Dip', :address => '97 Hall St Bondi Beach NSW')
c9 = Coffeeshop.create(:name => 'Brown Sugar', :address => '106 Curlewis St Bondi NSW')
c10 = Coffeeshop.create(:name => 'Sonoma Cafe Bondi', :address => 'r10/178 Campbell Parade Bondi Beach NSW')
c11 = Coffeeshop.create(:name => 'Lilliputien', :address => '112 O Brien St Bondi Beach NSW')


u1.coffeeshops << c1 << c2 << c3 << c4
u2.coffeeshops << c5 << c6 << c7 << c8
u3.coffeeshops << c9 << c10 << c11
