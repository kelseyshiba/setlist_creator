# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Setlist.create( date: DateTime.now + 1)
Setlist.create( date: DateTime.now + 2)
Setlist.create( date: DateTime.now + 3)
Setlist.create( date: DateTime.now + 4)
Setlist.create( date: DateTime.now + 5)
Setlist.create( date: DateTime.now + 6)
Setlist.create( date: DateTime.now + 7)
Setlist.create( date: DateTime.now + 8)
Setlist.create( date: DateTime.now + 9)
Setlist.create( date: DateTime.now + 10)

Song.create(title: "At Last", artist: "Etta James", key: "F")
Song.create(title: "Sir Duke", artist: "Stevie Wonder", key: "B")
Song.create(title: "I Want You Back", artist: "Michael Jackson", key: "Ab")
Song.create(title: "Lovely Day", artist: "Bill Withers", key: "E")
Song.create(title: "Blame it On the Boogie", artist: "Michael Jackson", key: "Eb")
Song.create(title: "PYT", artist: "Michael Jackson", key: "Gb")
Song.create(title: "Thinking Out Loud", artist: "Ed Sheeran", key: "D")
Song.create(title: "Shake It Off", artist: "Taylor Swift", key: "a minor")
Song.create(title: "Signed, Sealed, Delivered", artist: "Stevie Wonder", key: "F")
Song.create(title: "Harvest Moon", artist: "Neil Young", key: "G")
Song.create(title: "Isn't She Lovely", artist: "Stevie Wonder", key: "E")
Song.create(title: "My Girl", artist: "The Temptations", key: "C")
Song.create(title: "Valerie", artist: "Amy Winehouse", key: "Ab")
Song.create(title: "I Wanna Dance With Somebody", artist: "Whitney Houston", key: "Gb")
Song.create(title: "September", artist: "EWF", key: "D")
Song.create(title: "Rock With You", artist: "Micahel Jackson", key: "Bb minor")
Song.create(title: "Kiss", artist: "Prince", key: "A minor")
Song.create(title: "Brown Eyed Girl", artist: "Van Morrison", key: "G")
Song.create(title: "How Sweet it Is", artist: "James Taylor", key: "G")


SetlistSong.create(song_id: 1, setlist_id: 1)