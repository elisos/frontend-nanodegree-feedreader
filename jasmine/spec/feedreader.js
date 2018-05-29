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
//            hamburger.onclick = function () {
//                if (bodyList.contains('menu-hidden')) {
//                    expect(bodyList).not.toContain('menu-hidden');
//                } else {
//                    expect(bodyList).toContain('menu-hidden');
//                }
//            }; 
            
            if (bodyList.contains('menu-hidden')) {
                hamburger.onclick = function () {
                    expect(bodyList).not.toContain('menu-hidden');
                };
            } else {
                hamburger.onclick = function () {
                    expect(bodyList).toContain('menu-hidden');
                };
            }
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
