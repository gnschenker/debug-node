var request = require("request");
var server = require("../server.js");
var base_url = "http://localhost:3000/";

describe("when testing projects endpoint", function(){
    it("should return status OK", function(done){
        request.get(base_url+"isPrime/11", function(error, response, body) {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
    it("should return list of projects", function(done){
        request.get(base_url+'isPrime/11', function(error, response, body) {
            expect(JSON.parse(response.body)).toBe(true);
            done();
        })
    });
    
    // clean up... shutting down the server
    it('should clean up', function(){
        server.stop();
    })
})
