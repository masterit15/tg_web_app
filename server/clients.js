class Clients {
  constructor(){
    this.clients = []
  }
  addClient(client){
    let index = this.clients.findIndex(c=>c.socket == client.socket)
    if(index == -1) this.clients.push(client)
  }
  getClientTg(id){
    return this.clients.find(c=>c.id = id)
  }
  getClients(){
    return this.clients
  }
  deleteClient(socketID){
    this.clients = this.clients.filter(c=>c.socket!=socketID)
  }
}
export default Clients