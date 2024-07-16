#  To create Booking Model :-
`npx sequelize model:generate --name Booking --attributes flightId:integer,userId:integer,status:enum`

# To modify Booking model :-
 `npx sequelize migration:create --name modify_bookings_add_new_fields`