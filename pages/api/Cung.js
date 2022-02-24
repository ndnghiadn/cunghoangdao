const DATA = require('../../data.json')

export default function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const temp = DATA.map(item => ({name: item.name, query: item.query, date: item.date, image: item.image}))
      res.status(200).json(temp)
    }
  } catch (error) {
    console.log('Internal server error: ', error)
    res.status(500).json({msg: 'Internal server error.'})
  }
}
