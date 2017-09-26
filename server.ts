import * as io from 'socket.io-client'
import SocketServer from '../../common/server/abstract/socketServer'

class CmsService extends SocketServer {

  constructor () {
    super();

    this.io = io.connect(`${this.config.socket.url}:${this.config.socket.port}`, <any>{
      reconnect: true,
      query: "type=cms",
    });

    this.initSocket()
  }

  private initSocket (): void {
    this.io.on('connect', () : void => { 
      console.log('Cms service connected')
    });
  }

}

export default new CmsService()
