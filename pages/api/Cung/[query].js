import * as DATA from '../../../data.json'

export default function handler(req, res) {
    const { query } = req.query
    try {
        if (req.method === 'GET') {
            const temp = DATA.find(item => item.query === `/${query}`)
            res.status(200).json(temp)
        }
    } catch (error) {
        console.log('Internal server error: ', error)
        res.status(500).json({msg: 'Internal server error.'})
    }
}
