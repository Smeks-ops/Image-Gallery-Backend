const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app/app');

const should = chai.should();

chai.use(chaiHttp);

describe('/GET ', () => {
  it('it should return a a response when you call the base url', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.statusCode.should.eql(200);
        res.status.should.eql(200);
        done();
      });
  });
});

describe('/GET ', () => {
  it('it should return a json file with a bunch of images', (done) => {
    chai.request(app)
      .get('/photos')
      .end((err, res) => {
        // console.log(res.body.resources)
        res.body.resources.should.be.an('array');
        res.body.should.have.property('next_cursor');
        res.body.resources[0].should.have.property('asset_id');
        res.body.resources[0].should.have.property('public_id');
        res.body.resources[0].should.have.property('format');
        res.body.resources[0].should.have.property('version');
        res.body.resources[0].should.have.property('resource_type');
        res.body.resources[0].should.have.property('type');
        res.body.resources[0].should.have.property('created_at');
        res.body.resources[0].should.have.property('bytes');
        res.body.resources[0].should.have.property('width');
        res.body.resources[0].should.have.property('height');
        res.body.resources[0].should.have.property('url');

        done();
      });
  });
});

describe('/GET ', () => {
  it('it should return a json file with a specific image', (done) => {
    chai.request(app)
      .get('/search')
      .end((err, res) => {
        // console.log(res.body.resources)
        res.body.resources.should.be.an('array');
        res.body.resources[0].should.have.property('asset_id');
        res.body.resources[0].should.have.property('public_id');
        res.body.resources[0].should.have.property('format');
        res.body.resources[0].should.have.property('version');
        res.body.resources[0].should.have.property('resource_type');
        res.body.resources[0].should.have.property('type');
        res.body.resources[0].should.have.property('created_at');
        res.body.resources[0].should.have.property('bytes');
        res.body.resources[0].should.have.property('width');
        res.body.resources[0].should.have.property('height');
        res.body.resources[0].should.have.property('url');
        res.body.resources[0].should.have.property('secure_url');
        res.body.resources[0].should.have.property('status');
        res.body.resources[0].should.have.property('access_mode');
        res.body.resources[0].should.have.property('access_control');
        res.body.resources[0].should.have.property('etag');
        res.body.resources[0].should.have.property('created_by');
        res.body.resources[0].should.have.property('uploaded_by');


        done();
      });
  });
});
