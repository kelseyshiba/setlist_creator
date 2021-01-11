## Javascript Set List Creator with API
This project was built for musicians wanting to create setlists quickly and easily that are modifiable and user friendly. You can add, edit, update, and delete any song and any setlist.  You can also drag and drop songs onto setlists/and or remove them.

## Installation && Getting Started
After cloning the project, be sure to run

$ bundle OR bundle install

To include all dependencies

I recommend opening the front end by CDing into setlist-creator-frontend and then running:
open index.html

You can run the server on the backside by opening another terminal and CDing into setlist-creator-backend and running:
rails s


## Development

In your terminal, run the command:

$ bundle exec rails db:setup

To seed the Database with some data, run:

$ rails db:seed

Start up the local server

$ rails s OR rails server

To pull up the interactive console

$ rails c OR rails console

Run Control + C to stop the server at any time.

Once the server is running, you can visit the APIs as follows:
localhost:3000/songs or /songs/id to view all or just one song
localhost:3000/setlists or setlists/id to view all or just one setlist
locatlhost:3000/setlist_songs or setlist_songs/id to view all of the join table or one entry

## Built With
Ruby version 2.6.1p33
Bootstrap 4.5.0
Javascript
Font Awesome for icons

## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/kelseyshiba/setlist_creator. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the code of conduct.

## Code of Conduct
Everyone interacting in the Rails project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the code of conduct.

## License
[MIT](https://choosealicense.com/licenses/mit/)