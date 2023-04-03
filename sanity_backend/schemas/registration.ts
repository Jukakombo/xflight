import {defineField, defineType} from 'sanity'
export default defineType({
  name: 'vflight',
  title: 'Viola Flight Agency',
  type: 'document',
  fields: [
    defineField({
      name: 'firstName',
      type: 'string',
      title: 'First Name',
    }),
    defineField({
      name: 'lastName',
      type: 'string',
      title: 'Last Name',
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'email',
    }),
    defineField({
      name: 'amount',
      type: 'number',
      title: 'Amount $',
    }),
    defineField({
      name: 'paymentMethode',
      type: 'string',
      title: 'Payment Methode',
    }),

    defineField({
      name: 'phone',
      type: 'string',
      title: 'Phone Number',
    }),
    defineField({
      name: 'vclass',
      type: 'string',
      title: 'Class',
    }),
    defineField({
      name: 'adult',
      type: 'string',
      title: 'Number of Adult(s)',
    }),
    defineField({
      name: 'children',
      type: 'string',
      title: 'Number of Childrens(s)',
    }),
    defineField({
      name: 'date',
      type: 'string',
      title: 'Date',
    }),
    defineField({
      name: 'flightNo',
      type: 'string',
      title: 'Flight Number',
    }),
    defineField({
      name: 'company',
      type: 'string',
      title: 'Air company',
    }),
    defineField({
      name: 'arrivalTime',
      type: 'string',
      title: 'arrival Time',
    }),
    defineField({
      name: 'departureTime',
      type: 'string',
      title: 'Departure Time',
    }),
    defineField({
      name: 'from',
      type: 'string',
      title: 'Traveling From',
    }),
    defineField({
      name: 'to',
      type: 'string',
      title: 'Traveling to',
    }),
  ],
})
