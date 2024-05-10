import Invoice from './invoice.model.js'
import Service from '../Service/service.model.js'
import Event from '../Event/event.model.js'
import Room from '../Room/room.model.js'


//CREATE
export const crearFactura = async (req, res) => {
  try {
    const { event, room, reservation, services, user } = req.body

    // Obtenemos precios de los servicios
    const precioServicios = await Service.find({ _id: { $in: services } })
      .then(servicios => servicios.reduce((total, servicio) => total + servicio.price, 0))

    // Obtenemos los precios de los otros elementos (event y room)
    const precioEvento = event ? await Event.findById(event).then(evento => evento ? evento.price : 0) : 0
    const precioHabitacion = room ? await Room.findById(room).then(habitacion => habitacion ? habitacion.price : 0) : 0

    // Calculamos el total sumando los precios de todos los elementos
    const total = precioServicios + precioEvento + precioHabitacion

    // Creamos y guardamos la factura
    const nuevaFactura = new Invoice({ event, room, reservation, services, user, total })
    const facturaGuardada = await nuevaFactura.save()

    res.status(201).send(facturaGuardada)
  } catch (error) {
    console.error(error)
    res.status(500).send({ msg: 'Error al agregar factura' })
  }
}

//LIST
export const listInvoices = async (req, res) => {
  try {
      const invoices = await Invoice.find()
        .populate('user', ['name', '-_id'])
        .populate('room', ['numberRoom', 'description', 'state', 'ability', 'price', '-_id'])
        .populate('event',['nameEvent', 'price', 'description', '-_id'])
        .populate('reservation', ['startDate', 'endDate','-_id'])
        .populate('services',['name', 'description', 'price', '-_id']).select('-__v')

      if (invoices.length === 0) {
          return res.status(404).send({ msg: 'No invoices found' })
      }
      return res.send({msg: 'Las facturas son: ', invoices });
  } catch (err) {
      console.error(err);
      return res.status(500).send({ msg: 'Error al querer listar las facturas' })
  }
}