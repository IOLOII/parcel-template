import { getDingSdk } from './dingSdk'

getDingSdk().then(({ dd }) => {

  // 接入会议api
  window.createVideoMeeting = (options, cbs) => { 
    if (!options) return

    dd.createVideoMeeting(options)
      .catch(err => cbs.errCb && cbs.errCb(err))
  }

  // 发钉v1api
  window.createDing = (options, cbs) => { 
    if (!options) return

    dd.createDing(options)
      .catch(err => cbs.errCb && cbs.errCb(err))
  }

})