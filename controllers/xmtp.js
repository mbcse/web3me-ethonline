import { Client } from '@xmtp/xmtp-js'
import { Wallet } from 'ethers'

async function getMessageData(convAddres, wallet) {
    const xmtp = await Client.create(wallet)
    const data = [];
    for (const conversation of await xmtp.conversations.list()) {
        // All parameters are optional and can be omitted
        const opts = {
          // Only show messages from last 24 hours
          startTime: new Date(new Date().setDate(new Date().getDate() - 1)),
          endTime: new Date(),
        }
        const messagesInConversation = await conversation.messages(opts)
        data.push(messagesInConversation)
    }
    return data  
}
