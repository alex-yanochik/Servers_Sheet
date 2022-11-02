describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers', function () {
    submitServerInfo();
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a blank server', function () {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.allServers).toEqual(undefined);
  });


  afterEach(function() {
    serverId = 0;
    allServers = {};
  });
});
