# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Group.create(name: "WDI7")
Group.create(name: "WDI8")

User.create(name: "Gwen Au", group_id: 1, email: "quyen_au@hotmail.com", github: "gwenau", linkedin: "http://au.linkedin.com/pub/gwen-au/45/266/a89", postcode: "NW1 0LE")
User.create(name: "Toby Merlet", group_id: 1, github: "toby_merlet", linkedin: "http://www.linkedin.com/pub/toby-merlet/22/a07/918")
User.create(name: "Tobias Hale", group_id: 1, github: "Tobias_Hale", linkedin: "http://uk.linkedin.com/pub/tobias-hale/41/101/728?trk=pub-pbmap")
User.create(name: "Sam Maton", group_id: 1, github: "Sam_Maton", linkedin: "http://uk.linkedin.com/pub/sam-maton/7a/391/831?trk=pub-pbmap")
User.create(name: "Alex Windett", group_id: 1, github: "alex_windett", linkedin: "http://uk.linkedin.com/pub/alexander-windett/63/954/387?trk=pub-pbmap")

