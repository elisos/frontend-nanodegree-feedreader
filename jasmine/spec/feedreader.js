$(function() {
    
    describe('RSS Feeds', function() {
    
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

    //Loop through allFeeds and test whether the url and name values are defined and not empty.
        it('urls are defined', function() {
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        it('names are defined', function() {
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
        
    });

//Test suite for the menu:
    describe('The menu', function() {
        const body = document.body;
        const bodyList = body.classList;
        const hamburger = document.getElementsByClassName('menu-icon-link');
        
        //Test whether the menu is hidden by default
        it('is hidden by default', function() {
            expect(bodyList).toContain('menu-hidden');
        });

        //Test whether the menu toggles open and closed when the hamburger icon is clicked.
        it('toggles visibility when clicked', function() {
//           
//            if (bodyList.contains('menu-hidden')) {
//                hamburger.trigger("click");
//                expect(bodyList).not.toContain('menu-hidden');
//                };
//            } else {
//                hamburger.trigger("click");
//                expect(bodyList).toContain('menu-hidden');
//                };
//            }
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
            
        //Once the loadFeed function has finished runnning
        beforeEach(function(done){
            loadFeed(0, done);
        });
        
        //there is at least one item in the feed.
        it('container is not empty', function(done) {
            let entries = document.getElementsByClassName('entry');
            expect(entries).not.toBe(0);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
