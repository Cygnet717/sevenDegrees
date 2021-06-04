const actorData = [
    {
        name: "Viggo Mortenson", 
        difficulty: "easy"
    }, 
    {
        name: "Kevin Bacon",
        difficulty: "medium"
    },
    {
        name: "Tom Hanks",
        difficulty: "easy"
    }, 
    {
        name: "Sean Bean", 
        difficulty: "easy"
    }, 
    {
        name: "Ian Mckellen", 
        difficulty: "easy"
    }, 
    {
        name: "Karl Urban", 
        difficulty: "medium"
    }, 
    {
        name: "Bernard Hill", 
        difficulty: "hard"
    }, 
    {
        name: "Christopher Lee", 
        difficulty: "easy"
    }, 
    {
        name: "Elijah Wood", 
        difficulty: "easy"
    }, 
    {
        name: "Sean Astin", 
        difficulty: "easy"
    }, 
    {
        name: "Billy Boyd", 
        difficulty: "medium"
    }, 
    {
        name: "Dominic Monaghan", 
        difficulty: "hard"
    }, 
    {
        name: "Gary Oldman", 
        difficulty: "easy"
    }, 
    {
        name: "Heath Ledger", 
        difficulty: "easy"
    }, 
    {
        name: "Tom Hardy", 
        difficulty: "easy"
    }, 
    {
        name: "Orlando Bloom", 
        difficulty: "easy"
    }, 
    {
        name: "Christian Bale", 
        difficulty: "easy"
    }, 
    {
        name: "Liam Neeson", 
        difficulty: "easy"
    }, 
    {
        name: "Tom Wilkinson", 
        difficulty: "hard"
    }, 
    {
        name: "Cillian Murphy", 
        difficulty: "medium"
    }, 
    {
        name: "Norman Reedus", 
        difficulty: "medium"
    }, 
    {
        name: "Andrew Lincoln", 
        difficulty: "medium"
    }, 
    {
        name: "Tom Holland", 
        difficulty: "easy"
    }, 
    {
        name: "Robert Downey Jr", 
        difficulty: "easy"
    }, 
    {
        name: "Chris Hemsworth", 
        difficulty: "easy"
    }, 
    {
        name: "Mark Ruffolo", 
        difficulty: "easy"
    }, 
    {
        name: "Jeremy Renner", 
        difficulty: "easy"
    }, 
    {
        name: "Paul Rudd", 
        difficulty: "easy"
    }, 
    {
        name: "Chris Evans", 
        difficulty: "easy"
    }, 
    {
        name: "Chris Pratt", 
        difficulty: "easy"
    }, 
    {
        name: "Bradley Cooper", 
        difficulty: "easy"
    }, 
    {
        name: "Robert DeNiro", 
        difficulty: "easy"
    }, 
    {
        name: "Kurt Russell", 
        difficulty: "medium"
    }, 
    {
        name: "Vin Diesel", 
        difficulty: "easy"
    }, 
    {
        name: "Ryan Reynolds", 
        difficulty: "easy"
    }, 
    {
        name: "Ryan Gosling", 
        difficulty: "easy"
    }, 
    {
        name: "Will Ferrell", 
        difficulty: "easy"
    }, 
    {
        name: "John C. Reilly", 
        difficulty: "easy"
    }, 
    {
        name: "John C. McGinley", 
        difficulty: "medium"
    }, 
    {
        name: "Zach Braff", 
        difficulty: "medium"
    }, 
    {
        name: "Ewen McGregor", 
        difficulty: "easy"
    }, 
    {
        name: "James McAvoy", 
        difficulty: "easy"
    }, 
    {
        name: "Michael Fassbender", 
        difficulty: "easy"
    }, 
    {
        name: "Channing Tatum", 
        difficulty: "easy"
    }, 
    {
        name: "Samuel L. Jackson", 
        difficulty: "easy"
    }, 
    {
        name: "Alfred Molina", 
        difficulty: "hard"
    }, 
    {
        name: "Keith David", 
        difficulty: "medium"
    }, 
    {
        name: "Ethan Hawke", 
        difficulty: "easy"
    }, 
    {
        name: "Denzel Washington", 
        difficulty: "easy"
    }, 
    {
        name: "Matthew Broderick", 
        difficulty: "medium"
    }, 
    {
        name: "Cary Elwes", 
        difficulty: "medium"
    }, 
    {
        name: "Morgan Freeman", 
        difficulty: "easy"
    }, 
    {
        name: "Mandy Patankin", 
        difficulty: "hard"
    }, 
    {
        name: "Billy Crystal", 
        difficulty: "medium"
    }, 
    {
        name: "Nicolas Cage", 
        difficulty: "easy"
    }, 
    {
        name: "John Malkovich", 
        difficulty: "easy"
    }, 
    {
        name: "Colm Meaney", 
        difficulty: "hard"
    }, 
    {
        name: "Ving Rhames", 
        difficulty: "medium"
    }, 
    {
        name: "John Travolta", 
        difficulty: "easy"
    }, 
    {
        name: "Bruce Willis", 
        difficulty: "easy"
    }, 
    {
        name: "Alan Rickman", 
        difficulty: "easy"
    }, 
    {
        name: "Jeremy Irons", 
        difficulty: "medium"
    }, 
    {
        name: "Mel Gibson", 
        difficulty: "easy"
    }, 
    {
        name: "Jason Issacs", 
        difficulty: "medium"
    }, 
    {
        name: "Adam Baldwin", 
        difficulty: "easy"
    }, 
    {
        name: "Chris Cooper", 
        difficulty: "medium"
    }, 
    {
        name: "Daniel Radcliffe", 
        difficulty: "medium"
    }, 
    {
        name: "Daniel Day-Lewis", 
        difficulty: "easy"
    }, 
    {
        name: "Daniel Craig", 
        difficulty: "easy"
    }, 
    {
        name: "Pierce Brosnan", 
        difficulty: "medium"
    }, 
    {
        name: "Sean Connery", 
        difficulty: "easy"
    }, 
    {
        name: "Harrison Ford", 
        difficulty: "easy"
    }, 
    {
        name: "John Rhys-Davies", 
        difficulty: "medium"
    }, 
    {
        name: "John Ratzenberger", 
        difficulty: "medium"
    }, 
    {
        name: "John Goodman", 
        difficulty: "medium"
    }, 
    {
        name: "Jeff Bridges", 
        difficulty: "easy"
    }, 
    {
        name: "Lloyd Bridges", 
        difficulty: "hard"
    }, 
    {
        name: "Charlie Sheen", 
        difficulty: "medium"
    }, 
    {
        name: "Steve Buscemi", 
        difficulty: "medium"
    }, 
    {
        name: "Steven Seagal", 
        difficulty: "medium"
    }, 
    {
        name: "Steve Zahn", 
        difficulty: "medium"
    },  
    {
        name: "Philip Seymour Hoffman", 
        difficulty: "medium"
    }, 
    {
        name: "Adam Sandler", 
        difficulty: "easy"
    }, 
    {
        name: "Mark Wahlberg", 
        difficulty: "easy"
    }, 
    {
        name: "Mark Hamill", 
        difficulty: "medium"
    }, 
    {
        name: "James Earl Jones", 
        difficulty: "medium"
    }, 
    {
        name: "Kevin Costner", 
        difficulty: "medium"
    }, 
    {
        name: "Sam Elliot", 
        difficulty: "medium"
    }, 
    {
        name: "Bill Paxton", 
        difficulty: "medium"
    }, 
    {
        name: "Val Kilmer", 
        difficulty: "medium"
    }, 
    {
        name: "Jim Carrey", 
        difficulty: "easy"
    }, 
    {
        name: "Jeff Daniels", 
        difficulty: "medium"
    }, 
    {
        name: "Martin Sheen", 
        difficulty: "medium"
    }, 
    {
        name: "Michael Douglas", 
        difficulty: "medium"
    }, 
    {
        name: "Stephan Lang", 
        difficulty: "hard"
    }, 
    {
        name: "Dustin Hoffman", 
        difficulty: "easy"
    }, 
    {
        name: "Tom Cruise", 
        difficulty: "easy"
    }, 
    {
        name: "Michael Biehn", 
        difficulty: "medium"
    }, 
    {
        name: "Michael B. Jordan", 
        difficulty: "medium"
    }, 
    {
        name: "Nick Nolte", 
        difficulty: "medium"
    }, 
    {
        name: "Kelsey Grammer", 
        difficulty: "medium"
    }, 
    {
        name: "Steve Martin", 
        difficulty: "easy"
    }, 
    {
        name: "Mike Meyers", 
        difficulty: "easy"
    }, 
    {
        name: "Dana Carvey", 
        difficulty: "medium"
    }, 
    {
        name: "Barry Pepper", 
        difficulty: "medium"
    }, 
    {
        name: "Robert Duvall", 
        difficulty: "medium"
    }, 
    {
        name: "Nathan Jones", 
        difficulty: "hard"
    }, 
    {
        name: "Jet Li", 
        difficulty: "medium"
    }, 
    {
        name: "Jackie Chan", 
        difficulty: "easy"
    }, 
    {
        name: "Chris Tucker", 
        difficulty: "medium"
    }, 
    {
        name: "Owen Wilson", 
        difficulty: "easy"
    }, 
    {
        name: "Luke Wilson", 
        difficulty: "medium"
    }, 
    {
        name: "Bill Murrey", 
        difficulty: "easy"
    }, 
    {
        name: "Chevy Chase", 
        difficulty: "medium"
    }, 
    {
        name: "Dan Aykroyd", 
        difficulty: "medium"
    }, 
    {
        name: "Sylvester Stallone", 
        difficulty: "medium"
    }, 
    {
        name: "Arnold Schwarzenegger", 
        difficulty: "easy"
    }, 
    {
        name: "Jason Statham", 
        difficulty: "easy"
    }, 
    {
        name: "Matt Damon", 
        difficulty: "easy"
    }, 
    {
        name: "Jason Momoa", 
        difficulty: "easy"
    }, 
    {
        name: "Jason Sudeikis", 
        difficulty: "medium"
    }, 
    {
        name: "Matthew McConaughey", 
        difficulty: "easy"
    }, 
    {
        name: "Matthew Lillard", 
        difficulty: "medium"
    }, 
    {
        name: "Rick Moranis", 
        difficulty: "medium"
    }, 
    {
        name: "John Cleese", 
        difficulty: "medium"
    }, 
    {
        name: "Terry Jones", 
        difficulty: "hard"
    }, 
    {
        name: "Eric Idle", 
        difficulty: "medium"
    }, 
    {
        name: "Graham Chapman", 
        difficulty: "hard"
    }, 
    {
        name: "Michael Palin", 
        difficulty: "hard"
    }, 
    {
        name: "Kevin Kline", 
        difficulty: "medium"
    }, 
    {
        name: "Idris Elba", 
        difficulty: "medium"
    }, 
    {
        name: "Ben Affleck", 
        difficulty: "easy"
    }, 
    {
        name: "Josh Hartnett", 
        difficulty: "easy"
    }, 
    {
        name: "Jeffery Dean Morgan", 
        difficulty: "easy"
    }, 
    {
        name: "Gerard Butler", 
        difficulty: "easy"
    }, 
    {
        name: "Jamie Foxx", 
        difficulty: "medium"
    }, 
    {
        name: "J.K. Simmons", 
        difficulty: "medium"
    }, 
    {
        name: "Brad Pitt", 
        difficulty: "easy"
    }, 
    {
        name: "George Clooney", 
        difficulty: "easy"
    }, 
    {
        name: "Tim Blake Nelson", 
        difficulty: "medium"
    }, 
    {
        name: "John Turturro", 
        difficulty: "medium"
    }, 
    {
        name: "Don Cheadle", 
        difficulty: "medium"
    }, 
    {
        name: "Edward Norton", 
        difficulty: "easy"
    }, 
    {
        name: "Johnny Depp", 
        difficulty: "easy"
    }, 
    {
        name: "Colin Firth", 
        difficulty: "medium"
    }, 
    {
        name: "Russell Crowe", 
        difficulty: "easy"
    }, 
    {
        name: "Alec Baldwin", 
        difficulty: "easy"
    }, 
    {
        name: "Ed Harris", 
        difficulty: "easy"
    }, 
    {
        name: "Kevin Spacy", 
        difficulty: "easy"
    }, 
    {
        name: "Al Pacino", 
        difficulty: "medium"
    }, 
    {
        name: "Leslie Nielson", 
        difficulty: "medium"
    }, 
    {
        name: "Christian Slater", 
        difficulty: "medium"
    }, 
    {
        name: "Thomas Jane", 
        difficulty: "medium"
    }, 
    {
        name: "Jesse Ventura", 
        difficulty: "hard"
    }, 
    {
        name: "Jason Bateman", 
        difficulty: "medium"
    }, 
    {
        name: "Michael J. Fox", 
        difficulty: "easy"
    }, 
    {
        name: "Christopher Lloyd", 
        difficulty: "medium"
    }, 
    {
        name: "Patrick Stewart", 
        difficulty: "easy"
    }, 
    {
        name: "Hugh Jackman", 
        difficulty: "easy"
    }, 
    {
        name: "Hugh Grant", 
        difficulty: "easy"
    }, 
    {
        name: "George C. Scott", 
        difficulty: "medium"
    }, 
    {
        name: "Kevin Hart", 
        difficulty: "easy"
    },  
    {
        name: "Dwayne Johnson", 
        difficulty: "easy"
    }, 
    {
        name: "Vince Vauhgn", 
        difficulty: "easy"
    }, 
    {
        name: "Geoffrey Rush", 
        difficulty: "medium"
    }, 
    {
        name: "Guy Pierce", 
        difficulty: "medium"
    }, 
    {
        name: "Keanu Reeves", 
        difficulty: "easy"
    }, 
    {
        name: "Ben Kingsley", 
        difficulty: "easy"
    }, 
    {
        name: "Jude Law", 
        difficulty: "easy"
    }, 
    {
        name: "Ralph Fiennes", 
        difficulty: "medium"
    }, 
    {
        name: "Brendan Fraser", 
        difficulty: "easy"
    }, 
    {
        name: "Dennis Quaid", 
        difficulty: "medium"
    }, 
    {
        name: "Randy Quaid", 
        difficulty: "medium"
    }, 
    {
        name: "Jake Gyllenhaal", 
        difficulty: "easy"
    }, 
    {
        name: "Will Smith", 
        difficulty: "easy"
    }, 
    {
        name: "Will Arnett", 
        difficulty: "medium"
    }, 
    {
        name: "Daniel Stern", 
        difficulty: "hard"
    }, 
    {
        name: "Joe Pesci", 
        difficulty: "medium"
    }, 
    {
        name: "Macaulay Culkin", 
        difficulty: "medium"
    }, 
    {
        name: "Ray Liotta", 
        difficulty: "medium"
    }, 
    {
        name: "Harvey Keitel", 
        difficulty: "medium"
    }, 
    {
        name: "Danny Glover", 
        difficulty: "medium"
    }, 
    {
        name: "Jon Voight", 
        difficulty: "hard"
    }, 
    {
        name: "Adrian Brody", 
        difficulty: "medium"
    }, 
    {
        name: "Carl Weathers", 
        difficulty: "hard"
    }, 
    {
        name: "Chris Rock", 
        difficulty: "medium"
    }, 
    {
        name: "Bill Pullman", 
        difficulty: "medium"
    }, 
    {
        name: "Jeff Goldblum", 
        difficulty: "easy"
    }, 
    {
        name: "Sam Neill", 
        difficulty: "medium"
    }, 
    {
        name: "Wayne Knight", 
        difficulty: "hard"
    }, 
    {
        name: "Clive Owen", 
        difficulty: "easy"
    }, 
    {
        name: "Adam Driver", 
        difficulty: "easy"
    }, 
    {
        name: "Martin Freeman", 
        difficulty: "easy"
    }, 
    {
        name: "Simon Pegg", 
        difficulty: "medium"
    }, 
    {
        name: "Nick Frost", 
        difficulty: "medium"
    }, 
    {
        name: "David Warner", 
        difficulty: "hard"
    }, 
    {
        name: "Benedict Cumberbatch", 
        difficulty: "easy"
    }, 
    {
        name: "Ben Stiller", 
        difficulty: "easy"
    }, 
    {
        name: "Justin Long", 
        difficulty: "medium"
    }, 
    {
        name: "Seth Rogan", 
        difficulty: "easy"
    }, 
    {
        name: "Steve Carell", 
        difficulty: "easy"
    }, 
    {
        name: "Kevin Smith", 
        difficulty: "medium"
    }, 
    {
        name: "Jack Nicholson", 
        difficulty: "easy"
    }, 
    {
        name: "Rip Torn", 
        difficulty: "medium"
    }, 
    {
        name: "R. Lee Ermey", 
        difficulty: "medium"
    }, 
    {
        name: "Vincent D’Onofrio", 
        difficulty: "medium"
    }, 
    {
        name: "Matthew Modine", 
        difficulty: "hard"
    }, 
    {
        name: "Danny DeVito", 
        difficulty: "easy"
    }, 
    {
        name: "Christopher Walken", 
        difficulty: "easy"
    }, 
    {
        name: "Christopher Plummer", 
        difficulty: "easy"
    },
    {
        name: "James Dean",
        difficulty: "hard"
    },
    {
        name: "Cary Grant",
        difficulty: "hard"
    },
    {
        name: "Elizabeth Taylor",
        difficulty: "hard"
    },
    {
        name: "Michael Caine",
        difficulty: "easy"
    },
    {
        name: "Javier Bardem",
        difficulty: "medium"
    },
    {
        name: "Josh Brolin",
        difficulty: "medium"
    },
    {
        name: "Scarlett Johansson",
        difficulty: "easy"
    },
    {
        name: "Natalie Portman",
        difficulty: "easy"
    },
    {
        name: "Jennifer Lawrence",
        difficulty: "easy"
    },
    {
        name: "Meryl Streep",
        difficulty: "easy"
    },
    {
        name: "Charlize Theron",
        difficulty: "easy"
    },
    {
        name: "Nicole Kidman",
        difficulty: "easy"
    },
    {
        name: "Sandra Bullock",
        difficulty: "easy"
    },
    {
        name: "Anne Hathaway",
        difficulty: "easy"
    },
    {
        name: "Emma Stone",
        difficulty: "medium"
    },
    {
        name: "Angelina Jolie",
        difficulty: "easy"
    },
    {
        name: "Julia Roberts",
        difficulty: "easy"
    },
    {
        name: "Cate Blanchett",
        difficulty: "easy"
    },
    {
        name: "Halle Berry",
        difficulty: "medium"
    },
    {
        name: "Kate Winslet",
        difficulty: "easy"
    },
    {
        name: "Emma Watson",
        difficulty: "medium"
    },
    {
        name: "Emily Blunt",
        difficulty: "easy"
    },
    {
        name: "Margot Robbie",
        difficulty: "medium"
    },
    {
        name: "Jennifer Aniston",
        difficulty: "medium"
    },
    {
        name: "Viola Davis",
        difficulty: "medium"
    },
    {
        name: "Keira Knightley",
        difficulty: "easy"
    },
    {
        name: "Jodie Foster",
        difficulty: "medium"
    },
    {
        name: "Amy Adams",
        difficulty: "medium"
    },
    {
        name: "Reese Witherspoon",
        difficulty: "medium"
    },
    {
        name: "Salma Hayek",
        difficulty: "easy"
    },
    {
        name: "Antonio Banderas",
        difficulty: "easy"
    },
    {
        name: "Carrie Fisher",
        difficulty: "medium"
    },
    {
        name: "Kat Dennings",
        difficulty: "medium"
    },
    {
        name: "Alan Tudyk",
        difficulty: "medium"
    },
    {
        name: "Jon Favreau",
        difficulty: "medium"
    },
    {
        name: "Ron Livingston",
        difficulty: "hard"
    },
    {
        name: "Heather Graham",
        difficulty: "medium"
    },
    {
        name: "Eric Bana",
        difficulty: "medium"
    },
    {
        name: "Scott Grimes",
        difficulty: "medium"
    },
    {
        name: "Damian Lewis",
        difficulty: "medium"
    },
    {
        name: "David Wenham",
        difficulty: "medium"
    },
    {
        name: "Lena Headey",
        difficulty: "medium"
    },
    {
        name: "Peter Dinklage",
        difficulty: "easy"
    },
    {
        name: "Tom Sizemore",
        difficulty: "medium"
    },
    {
        name: "Emilia Clarke",
        difficulty: "medium"
    },
    {
        name: "Sophie Turner",
        difficulty: "medium"
    },
    {
        name: "Nikolaj Coster-Waldau",
        difficulty: "medium"
    },
    {
        name: "Michael Keaton",
        difficulty: "medium"
    },
    {
        name: "Henry Cavill",
        difficulty: "medium"
    },
    {
        name: "Powers Boothe",
        difficulty: "hard"
    },
    {
        name: "Hugh Laurie",
        difficulty: "medium"
    },
    {
        name: "Oliver Platt",
        difficulty: "hard"
    },
    {
        name: "Nicholas Hoult",
        difficulty: "medium"
    },
    {
        name: "January Jones",
        difficulty: "medium"
    },
    {
        name: "Tyler Mane",
        difficulty: "hard"
    },
    {
        name: "Ray Park",
        difficulty: "hard"
    },
    {
        name: "Anna Paquin",
        difficulty: "medium"
    },
    {
        name: "Kristen Stewart",
        difficulty: "easy"
    },
    {
        name: "Robert Pattinson",
        difficulty: "medium"
    },
    {
        name: "Bill Nighy",
        difficulty: "medium"
    },
    {
        name: "Rowan Atkinson",
        difficulty: "medium"
    },
    {
        name: "James Marsden",
        difficulty: "medium"
    },
    {
        name: "Meg Ryan",
        difficulty: "easy"
    },
    {
        name: "Renee Zellweger",
        difficulty: "easy"
    },
    {
        name: "Brendon Gleeson",
        difficulty: "medium"
    },
    {
        name: "Richard Gere",
        difficulty: "easy"
    },
    {
        name: "Jack Black",
        difficulty: "easy"
    },
    {
        name: "Joan Cusack",
        difficulty: "medium"
    },
    {
        name: "Giovanni Ribisi",
        difficulty: "medium"
    },
    {
        name: "Donald Sutherland",
        difficulty: "easy"
    },
    {
        name: "Ray Winstone",
        difficulty: "hard"
    },
    {
        name: "Charlie Hunnam",
        difficulty: "medium"
    },
    {
        name: "Ethan Suplee",
        difficulty: "medium"
    },
    {
        name: "Kiefer Sutherland",
        difficulty: "medium"
    },
    {
        name: "John Corbett",
        difficulty: "hard"
    },
    {
        name: "Michael Rooker",
        difficulty: "medium"
    },
    {
        name: "Billy Zane",
        difficulty: "hard"
    },
    {
        name: "Buck Taylor",
        difficulty: "hard"
    },
    {
        name: "Robert Mitchum",
        difficulty: "hard"
    },
    {
        name: "Billy Bob Thornton",
        difficulty: "medium"
    },
    {
        name: "Peter Stormare",
        difficulty: "medium"
    },
    {
        name: "Stellen Skarsgard",
        difficulty: "medium"
    },
    {
        name: "Thomas Haden Church",
        difficulty: "hard"
    },
    {
        name: "Eugene Levy",
        difficulty: "medium"
    },
    {
        name: "Warwick Davis",
        difficulty: "medium"
    },
    {
        name: "Leonardo DiCaprio",
        difficulty: "easy"
    },
    {
        name: "Willem Dafoe",
        difficulty: "easy"
    },
    {
        name: "Sean Penn",
        difficulty: "easy"
    },
    {
        name: "Christoph Waltz",
        difficulty: "medium"
    },
    {
        name: "Jared Leto",
        difficulty: "medium"
    },
    {
        name: "Tim Robbins",
        difficulty: "medium"
    },
    {
        name: "Elliot Page",
        difficulty: "medium"
    },
    {
        name: "Ken Watanabe",
        difficulty: "hard"
    },
    {
        name: "Tom Berenger",
        difficulty: "hard"
    },
    {
        name: "Pete Postlewaite",
        difficulty: "hard"
    },
    {
        name: "Marion Cotillard",
        difficulty: "medium"
    },
    {
        name: "Timothy Olyphant",
        difficulty: "easy"
    },
    {
        name: "Chris Pine",
        difficulty: "easy"
    },
    {
        name: "Ben Foster",
        difficulty: "medium"
    },
    {
        name: "Tommy Lee Jones",
        difficulty: "easy"
    },
    {
        name: "Isla Fisher",
        difficulty: "medium"
    },
    {
        name: "Jamie Lee Curtis",
        difficulty: "medium"
    },
    {
        name: "Gene Hackman",
        difficulty: "medium"
    },
    {
        name: "Anthony Hopkins",
        difficulty: "easy"
    },
    {
        name: "James Caan",
        difficulty: "hard"
    },
    {
        name: "Colin Farrell",
        difficulty: "easy"
    },
    {
        name: "Edward Furlong",
        difficulty: "medium"
    },
    {
        name: "Denholm Elliott",
        difficulty: "hard"
    },
    {
        name: "Richard Dreyfuss",
        difficulty: "medium"
    },
    {
        name: "Roy Scheider",
        difficulty: "hard"
    },
    {
        name: "Robert Shaw",
        difficulty: "hard"
    },
    {
        name: "Uma Thurman",
        difficulty: "easy"
    },
    {
        name: "Elizabeth Banks",
        difficulty: "medium"
    },
    {
        name: "Tina Fey",
        difficulty: "medium"
    },
    {
        name: "Jullianne Moore",
        difficulty: "easy"
    },
    {
        name: "Topher Grace",
        difficulty: "medium"
    },
    {
        name: "Danny Trejo",
        difficulty: "medium"
    },
    {
        name: "Laurence Fishburne",
        difficulty: "medium"
    },
    {
        name: "Carrie-Anne Moss",
        difficulty: "medium"
    },
    {
        name: "Hugo Weaving",
        difficulty: "medium"
    },
    {
        name: "Forest Whitaker",
        difficulty: "medium"
    },
    {
        name: "Andre Braugher",
        difficulty: "hard"
    },
    {
        name: "Brent Spiner",
        difficulty: "hard"
    },
    {
        name: "LeVar Burton",
        difficulty: "hard"
    },
    {
        name: "Nathan Fillion",
        difficulty: "hard"
    },
    {
        name: "Jewel Staite",
        difficulty: "hard"
    },
    {
        name: "Chiwetel Ejiofor",
        difficulty: "hard"
    },
    {
        name: "Gina Torres",
        difficulty: "hard"
    },
    {
        name: "Felicity Jones",
        difficulty: "hard"
    },
    {
        name: "Diego Luna",
        difficulty: "hard"
    },
    {
        name: "Donnie Yen",
        difficulty: "hard"
    },
    {
        name: "Mads Mikkelsen",
        difficulty: "hard"
    },
    {
        name: "Eddie Redmayne",
        difficulty: "medium"
    },
    {
        name: "Jon Hamm",
        difficulty: "medium"
    },
    {
        name: "David Thewlis",
        difficulty: "medium"
    },
    {
        name: "Emily Watson",
        difficulty: "medium"
    },
    {
        name: "Mark Strong",
        difficulty: "medium"
    },
    {
        name: "Michael Gambon",
        difficulty: "medium"
    },
    {
        name: "Tilda Swinton",
        difficulty: "medium"
    },
    {
        name: "Susan Sarandon",
        difficulty: "hard"
    },
    {
        name: "Laura Dern",
        difficulty: "hard"
    },
    {
        name: "Bruce Dern",
        difficulty: "hard"
    },
    {
        name: "Laura Linney",
        difficulty: "easy"
    },
    {
        name: "Judi Dench",
        difficulty: "easy"
    },
    {
        name: "Maggie Smith",
        difficulty: "easy"
    },
    {
        name: "Natalie Dormer",
        difficulty: "medium"
    },
    {
        name: "Jennifer Connelly",
        difficulty: "medium"
    },
    {
        name: "Helen Mirren",
        difficulty: "easy"
    },
    {
        name: "Milla Jovovich",
        difficulty: "medium"
    },
    {
        name: "Frances McDormand",
        difficulty: "medium"
    },
    {
        name: "Sam Rockwell",
        difficulty: "medium"
    },
    {
        name: "Sandra Oh",
        difficulty: "medium"
    },
    {
        name: "Hilary Swank",
        difficulty: "easy"
    },
    {
        name: "Anjelica Huston",
        difficulty: "medium"
    },
    {
        name: "Jean-Claude Van Damme",
        difficulty: "medium"
    },
    {
        name: "Raul Julia",
        difficulty: "hard"
    },
    {
        name: "Michael Gough",
        difficulty: "hard"
    },
    {
        name: "Helena Bonham Carter",
        difficulty: "easy"
    },
    {
        name: "Catherine Zeta-Jones",
        difficulty: "easy"
    },
    {
        name: "Kenny Baker",
        difficulty: "hard"
    },
    {
        name: "Richard Harris",
        difficulty: "hard"
    },
    {
        name: "Joaquin Phoenix",
        difficulty: "easy"
    },
    {
        name: "Robert Patrick",
        difficulty: "medium"
    },
    {
        name: "Robbie Coltrane",
        difficulty: "medium"
    },
    {
        name: "Joe Don Baker",
        difficulty: "hard"
    },
    {
        name: "John Hurt",
        difficulty: "medium"
    },
    {
        name: "Anthony Mackie",
        difficulty: "medium"
    },
    {
        name: "Sebastian Stan",
        difficulty: "medium"
    },
    {
        name: "Seth Green",
        difficulty: "medium"
    },
    {
        name: "Johnny Knoxville",
        difficulty: "medium"
    },
    {
        name: "Sean William Scott",
        difficulty: "medium"
    },
    {
        name: "Jason Biggs",
        difficulty: "medium"
    },
    {
        name: "Brian Cox",
        difficulty: "medium"
    },
    {
        name: "Jason Schwartzman",
        difficulty: "medium"
    },
    {
        name: "Donald Glover",
        difficulty: "medium"
    },
    {
        name: "Diane Lane",
        difficulty: "easy"
    },
    {
        name: "John Lithgow",
        difficulty: "medium"
    },
    {
        name: "Patrick Swayze",
        difficulty: "medium"
    },
    {
        name: "Howie Long",
        difficulty: "hard"
    },
    {
        name: "Maggie Gyllenhaal",
        difficulty: "medium"
    },
    {
        name: "Katie Holmes",
        difficulty: "medium"
    },
    {
        name: "Aaron Eckhart",
        difficulty: "medium"
    },
    {
        name: "Judd Nelson",
        difficulty: "hard"
    },
    {
        name: "Anthony Michael Hall",
        difficulty: "hard"
    },
    {
        name: "Eric Roberts",
        difficulty: "hard"
    },
    {
        name: "Julia Stiles",
        difficulty: "medium"
    },
    {
        name: "Joseph Gordon-Levitt",
        difficulty: "easy"
    },
    {
        name: "Allison Janney",
        difficulty: "hard"
    },
    {
        name: "Emilio Estevez",
        difficulty: "hard"
    },
    {
        name: "Molly Ringwald",
        difficulty: "hard"
    },
    {
        name: "Liv Tyler",
        difficulty: "easy"
    },
    {
        name: "Michael Cera",
        difficulty: "medium"
    },
    {
        name: "Mary Elizabeth Winstead",
        difficulty: "medium"
    },
    {
        name: "Aubrey Plaza",
        difficulty: "hard"
    },
    {
        name: "Anna Kendrick",
        difficulty: "medium"
    },
    {
        name: "Nick Offerman",
        difficulty: "medium"
    },
    {
        name: "Rob Lowe",
        difficulty: "medium"
    },
    {
        name: "Bradley Whitford",
        difficulty: "hard"
    },
    {
        name: "Emma Thompson",
        difficulty: "medium"
    },
    {
        name: "Mickey Rourke",
        difficulty: "medium"
    },
    {
        name: "Paul Giamatti",
        difficulty: "medium"
    },
    {
        name: "Richard Jenkins",
        difficulty: "hard"
    },
    {
        name: "Marisa Tomei",
        difficulty: "medium"
    },
    {
        name: "Kristen Bell",
        difficulty: "easy"
    },
    {
        name: "Dax Shepard",
        difficulty: "medium"
    },
    {
        name: "Josh Gad",
        difficulty: "hard"
    },
    {
        name: "Dane Cook",
        difficulty: "medium"
    },
    {
        name: "Jimmy Stewart",
        difficulty: "hard"
    },
    {
        name: "Jessica Simpson",
        difficulty: "medium"
    },
    {
        name: "Andy Dick",
        difficulty: "hard"
    },
    {
        name: "Michael Pena",
        difficulty: "medium"
    },
    {
        name: "Mary Steenburgen",
        difficulty: "hard"
    },
    {
        name: "Robert Redford",
        difficulty: "hard"
    },
    {
        name: "Paul Newman",
        difficulty: "hard"
    },
    {
        name: "Cloris Leachman",
        difficulty: "hard"
    },
    {
        name: "Gene Wilder",
        difficulty: "medium"
    },
    {
        name: "Chris Farley",
        difficulty: "medium"
    },
    {
        name: "Billy Dee Williams",
        difficulty: "hard"
    },
    {
        name: "Burt Reynolds",
        difficulty: "medium"
    },
    {
        name: "John Wayne",
        difficulty: "hard"
    },
    {
        name: "Orson Welles",
        difficulty: "hard"
    },
    {
        name: "Lea Thompson",
        difficulty: "hard"
    },
    {
        name: "Dennis Hopper",
        difficulty: "medium"
    },
    {
        name: "Geena Davis",
        difficulty: "hard"
    },
    {
        name: "Frank Langella",
        difficulty: "hard"
    },
    {
        name: "Cameron Diaz",
        difficulty: "easy"
    },
    {
        name: "Ian Holm",
        difficulty: "medium"
    },
    {
        name: "Toby Jones",
        difficulty: "hard"
    },
    {
        name: "Ian McShane",
        difficulty: "medium"
    },
    {
        name: "Marcia Gay Harden",
        difficulty: "hard"
    },
    {
        name: "William Sadler",
        difficulty: "hard"
    },
    {
        name: "Melissa McBride",
        difficulty: "hard"
    },
    {
        name: "Sean Patrick Flanery",
        difficulty: "medium"
    },
    {
        name: "Billy Connolly",
        difficulty: "hard"
    },
    {
        name: "Tim Curry",
        difficulty: "medium"
    },
    {
        name: "Brad Garrett",
        difficulty: "medium"
    },
    {
        name: "Johnny Galecki",
        difficulty: "hard"
    },
    {
        name: "Peter Falk",
        difficulty: "hard"
    },
    {
        name: "Robin Wright",
        difficulty: "medium"
    },
    {
        name: "Wallace Shawn",
        difficulty: "medium"
    },
    {
        name: "Fred Savage",
        difficulty: "hard"
    },
    {
        name: "Gary Sinise",
        difficulty: "medium"
    },
    {
        name: "Sally Field",
        difficulty: "medium"
    },
    {
        name: "Haley Joel Osment",
        difficulty: "medium"
    },
    {
        name: "Lauren Graham",
        difficulty: "hard"
    },
    {
        name: "Blake Lively",
        difficulty: "easy"
    },
    {
        name: "Alexis Bledel",
        difficulty: "hard"
    },
    {
        name: "Edward Hermann",
        difficulty: "medium"
    },
    {
        name: "Sean Gunn",
        difficulty: "medium"
    },
    {
        name: "Melissa McCarthy",
        difficulty: "medium"
    },
    {
        name: "Jessica Alba",
        difficulty: "easy" 
    },
    {
        name: "Benicio Del Toro",
        difficulty: "medium"
    },
    {
        name: "Michael Clarke Duncan",
        difficulty: "medium"
    },
    {
        name: "Rosario Dawson",
        difficulty: "medium"
    },
    {
        name: "Rutger Hauer",
        difficulty: "hard"
    },
    {
        name: "Michael Madsen",
        difficulty: "medium"
    },
    {
        name: "Ellen DeGeneres",
        difficulty: "medium"
    },
    {
        name: "Stephen Root",
        difficulty: "hard"
    },
    {
        name: "Richard Kind",
        difficulty: "hard"
    },
    {
        name: "Julia Louis-Dreyfus",
        difficulty: "medium"
    },
    {
        name: "David Hyde Pierce",
        difficulty: "hard"
    },
    {
        name: "Denis Leary",
        difficulty: "medium"
    },
    {
        name: "Holly Hunter",
        difficulty: "hard"
    },
    {
        name: "Tobey Maguire ",
        difficulty: "medium"
    },
    {
        name: "Kirsten Dunst",
        difficulty: "easy"
    },
    {
        name: "James Franco",
        difficulty: "easy"
    },
    {
        name: "Joe Manganiello",
        difficulty: "medium"
    },
    {
        name: "Gwyneth Paltrow",
        difficulty: "easy"
    },
    {
        name: "Paul Bettany",
        difficulty: "medium"
    },
    {
        name: "Elizabeth Olson",
        difficulty: "easy"
    },
    {
        name: "Aaron Taylor-Johnson",
        difficulty: "hard"
    },
    {
        name: "James Spader",
        difficulty: "medium"
    },
    {
        name: "Olivia Wilde",
        difficulty: "medium"
    },
    {
        name: "Charlie Day",
        difficulty: "medium"
    },
    {
        name: "Ed Helms",
        difficulty: "medium"
    },
    {
        name: "Zach Galifianakis",
        difficulty: "medium"
    },
    {
        name: "Martin Short",
        difficulty: "medium"
    },
    {
        name: "Leonard Nimoy",
        difficulty: "medium"
    },
    {
        name: "William Shatner",
        difficulty: "medium"
    },
    {
        name: "Stone Cold Steve Austin",
        difficulty: "medium"
    },
    {
        name: "Dolph Lundgren",
        difficulty: "medium"
    },
    {
        name: "Wesley Snipes",
        difficulty: "medium"
    },
    {
        name: "Patton Oswalt",
        difficulty: "medium"
    },
    {
        name: "Tessa Thompson",
        difficulty: "medium"
    },
    {
        name: "Angela Bassett",
        difficulty: "medium"
    },
    {
        name: "Timothee Chalamet",
        difficulty: "medium"
    },
    {
        name: "Zoe Saldana",
        difficulty: "medium"
    },
    {
        name: "Octavia Spencer",
        difficulty: "medium"
    },
    {
        name: "Whoopi Goldberg",
        difficulty: "medium"
    },
    {
        name: "Eva Mendes",
        difficulty: "medium"
    },
    {
        name: "Michelle Rodriguez",
        difficulty: "medium"
    },
    {
        name: "Lucy Liu",
        difficulty: "medium"
    },
    {
        name: "Drew Barrymore",
        difficulty: "easy"
    },
    {
        name: "Humphrey Bogart",
        difficulty: "hard"
    },
    {
        name: "Gary Cooper",
        difficulty: "hard"
    },
    {
        name: "Clark Gable",
        difficulty: "hard"
    },
    {
        name: "Marlon Brando",
        difficulty: "hard"
    },
    {
        name: "James Stewart",
        difficulty: "hard"
    },
    {
        name: "Laurence Olivier",
        difficulty: "hard"
    },
    {
        name: "Henry Fonda",
        difficulty: "hard"
    },
    {
        name: "Gregory Peck",
        difficulty: "hard"
    },
    {
        name: "Katharine Hepburn",
        difficulty: "hard"
    },
    {
        name: "Audrey Hepburn",
        difficulty: "hard"
    },
    {
        name: "Errol Flynn",
        difficulty: "hard"
    },
    {
        name: "Gene Kelly",
        difficulty: "hard"
    },
    {
        name: "Marilyn Monroe",
        difficulty: "hard"
    },
    {
        name: "Clint Eastwood",
        difficulty: "medium"
    },
    {
        name: "Julianne Moore",
        difficulty: "medium"
    },
    {
        name: "Glenn Close",
        difficulty: "medium"
    },  
    {
        name: "Judy Garland",
        difficulty: "hard"
    },
    {
        name: "Kathy Bates",
        difficulty: "medium"
    },
    {
        name: "Michelle Pfeiffer",
        difficulty: "medium"
    },
    {
        name: "Sigourney Weaver",
        difficulty: "medium"
    },
    {
        name: "Jennifer Lopez",
        difficulty: "easy"
    },
    {
        name: "Grace Kelly",
        difficulty: "hard"
    },
    {
        name: "Gal Gadot",
        difficulty: "medium"
    },
    {
        name: "Buster Keaton",
        difficulty: "hard"
    }
];

function listCount(list){
    console.log(`there are ${list.length} actors in the list`)
}

//$(listCount(actorData));