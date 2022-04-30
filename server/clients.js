class Clients {
  constructor(){
    this.clients = []
  }
  addClient(client){
    if(this.clients.indexOf(client) == -1) this.clients.push(client)
  }
  getClients(){
    return this.clients
  }
  deleteClient(client){
    this.clients = this.clients.filter(c=>c!=client)
  }
}
export default Clients