import supabase from "@/app/_config/supabse-connect"

let cachedData: any = null
let lastFetchTime: any = null
const CACHE_DURATION = 1 * 60 * 1000

export async function GET() {
   const now = new Date().getTime()
   
   if (cachedData && (now - lastFetchTime < CACHE_DURATION)) {
      return Response.json(cachedData)
   }
   
   let { data: aircrafts, error } = await supabase.from('aircrafts').select('id, code, manufacturer, model')

   if (error) {
      console.log('Error fetching aircrafts:', error)
      return Response.json({ error: error.message }, {status: 500})
   }
   
   const data = aircrafts?.map(aircraft => ({
      id: aircraft.id,
      code: aircraft.code.trim(),
      manufacturer: aircraft.manufacturer.trim(),
      model: aircraft.model.trim()
   }))

   console.log('aircrafts fetched from database')
   cachedData = data
   lastFetchTime = now

   return Response.json(data)
}