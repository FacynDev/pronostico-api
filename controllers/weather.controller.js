import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config()

const BASE_URL = 'https://api.weatherapi.com/v1';
const API_KEY = process.env.WEATHER_KEY

export const weatherLocationCtrl = async (req, res) => {
    try {
        if (!req.body.query || req.body.query === "") return res.status(400).json({
            success: false,
            message: "Debes ingresar alguna ubicación."
        })
        await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${req.body.query}`)
            .then(({ data }) => {
                res.status(200).json({
                    data
                })
            })
            .catch(() => {
                res.status(404).json({
                    success: false,
                    message: `No se encontraron resultados para la ubicación: ${req.body.query}`
                })
            })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Ocurrio un error al obtener datos de esa ubicación.",
            error: error.message
        })
    }
}