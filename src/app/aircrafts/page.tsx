export default async function AircraftsList() {
   
   const response = await fetch(`${process.env.BASE_URL}/api/aircrafts`)
   const aircrafts = await response.json()

   return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
         {aircrafts.map((aircraft: any) => (
            <div key={aircraft.id} className="col-span-1 p-4 shadow-md rounded-lg bg-white text-black">
               <h2 className="text-xl font-semi-bold">{aircraft.model}</h2>
               <p>{aircraft.manufacturer}</p>
               <p className="text-lg font-medium">{aircraft.code}</p>
            </div>
         ))}
      </div>
   )
}