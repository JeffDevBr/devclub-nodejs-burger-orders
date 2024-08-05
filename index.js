import express from 'express'

const app = express()
app.use(express.json())

const orders = []

app.use((req, res, next) => {
    console.log(`[${req.method}] - ${req.url}`)
    next()
})

const checkOrderId = (req, res, next) => {
    const { id } = req.params
    const orderIndex = orders.findIndex(order => order.id === id)
    if (orderIndex < 0) {
        return res.status(404).json({ message: "user not found" })
    }
    req.orderIndex = orderIndex
    next()
}

app.post('/order', (req, res) => {
    const { order, clientName, price } = req.body
    const newOrder = {
        id: crypto.randomUUID(),
        order,
        clientName,
        price,
        status: 'Em preparação'
    }
    orders.push(newOrder)
    res.status(201).json(newOrder)
})

app.get('/order', (req, res) => {
    res.json(orders)
})

app.put('/order/:id', checkOrderId, (req, res) => {
    const { order, clientName, price } = req.body
    const updatedOrder = { ...orders[req.orderIndex], order, clientName, price }
    orders[req.orderIndex] = updatedOrder
    res.json(updatedOrder)
})

app.delete('/order/:id', checkOrderId, (req, res) => {
    orders.splice(req.orderIndex, 1)
    res.sendStatus(204)
})

app.get('/order/:id', checkOrderId, (req, res) => {
    res.json(orders[req.orderIndex])
})

app.patch('/order/:id', checkOrderId, (req, res) => {
    orders[req.orderIndex].status = 'Pronto'
    res.json(orders[req.orderIndex])
})

app.listen(3000)