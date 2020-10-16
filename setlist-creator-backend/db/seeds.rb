# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Setlist.create( date: "2020-08-08", name: "Set 1")
Setlist.create( date: "2020-08-08", name: "Set 2")
Setlist.create( date: "2020-08-08", name: "Set 4")
Setlist.create( date: "2020-08-08", name: "Set 3")
Setlist.create( date: "2020-08-08", name: "Set 5")
Setlist.create( date: "2020-08-08", name: "Set 6")
Setlist.create( date: "2020-08-08", name: "Set 7")
Setlist.create( date: "2020-08-08", name: "Set 8")
Setlist.create( date: "2020-08-08", name: "Set 9")
Setlist.create( date: "2020-08-08", name: "Set 10")

Song.create(title: "At Last", artist: "Etta James", key: "F", tempo: "120bpm")
Song.create(title: "Sir Duke", artist: "Stevie Wonder", key: "B", tempo: "120bpm")
Song.create(title: "I Want You Back", artist: "Michael Jackson", key: "Ab", tempo: "120bpm")
Song.create(title: "Lovely Day", artist: "Bill Withers", key: "E", tempo: "120bpm")
Song.create(title: "Blame it On the Boogie", artist: "Michael Jackson", key: "Eb", tempo: "120bpm")
Song.create(title: "PYT", artist: "Michael Jackson", key: "Gb", tempo: "120bpm")
Song.create(title: "Thinking Out Loud", artist: "Ed Sheeran", key: "D", tempo: "120bpm")
Song.create(title: "Shake It Off", artist: "Taylor Swift", key: "a minor", tempo: "120bpm")
Song.create(title: "Signed, Sealed, Delivered", artist: "Stevie Wonder", key: "F", tempo: "120bpm")
Song.create(title: "Harvest Moon", artist: "Neil Young", key: "G", tempo: "120bpm")
Song.create(title: "Isn't She Lovely", artist: "Stevie Wonder", key: "E", tempo: "120bpm")
Song.create(title: "My Girl", artist: "The Temptations", key: "C", tempo: "120bpm")
Song.create(title: "Valerie", artist: "Amy Winehouse", key: "Ab", tempo: "120bpm")
Song.create(title: "I Wanna Dance With Somebody", artist: "Whitney Houston", key: "Gb", tempo: "120bpm")
Song.create(title: "September", artist: "EWF", key: "D", tempo: "120bpm")
Song.create(title: "Rock With You", artist: "Micahel Jackson", key: "Bb minor", tempo: "120bpm")
Song.create(title: "Kiss", artist: "Prince", key: "A minor", tempo: "120bpm")
Song.create(title: "Brown Eyed Girl", artist: "Van Morrison", key: "G", tempo: "120bpm")
Song.create(title: "How Sweet it Is", artist: "James Taylor", key: "G", tempo: "120bpm")


SetlistSong.create(song_id: 1, setlist_id: 1)