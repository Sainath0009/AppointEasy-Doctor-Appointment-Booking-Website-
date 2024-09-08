import { Calendar, Clock, MapPin } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import CancelAppointment from './CancelAppointment';
import GlobalApi from '@/app/_utils/GlobalApi';
import { toast } from 'sonner';

function BookingList({ bookingList, expired, updateRecord }) {
  
  const onDeleteBooking = (item) => {
    console.log(item);
    GlobalApi.deleteBooking(item.id).then(resp => {
      console.log(resp);
      if (resp) {
        toast('Booking Deleted Successfully!');
        updateRecord();
      }
    });
  };

  // Sorting booking list based on expired or upcoming
  const sortedBookingList = bookingList.sort((a, b) => {
    const dateA = new Date(a.attributes?.Date);
    const dateB = new Date(b.attributes?.Date);

    return expired
      ? dateB - dateA
      : dateA - dateB; 
  });
  const filterUserBooking = (type) => {
    const now = new Date(); // Current date and time
  
    return bookingList.filter(item => {
      const bookingDateTime = new Date(`${item.attributes?.Date}T${item.attributes?.Time}`);
  
      return type === 'upcoming'
        ? bookingDateTime >= now // Upcoming if the appointment is in the future
        : bookingDateTime < now; // Expired if the appointment is in the past
    });
  };
  

  return (
    <div>
      {sortedBookingList.length > 0 ? sortedBookingList.map((item, index) => (
        <div key={index} className='flex gap-4 items-center border p-5 m-3 rounded-lg'>
          <Image
            src={item.attributes.doctor.data?.attributes.image?.data.attributes.url}
            className='rounded-full h-[70px] w-[70px] object-cover'
            width={70}
            height={70}
            alt='doctor-image'
          />
          <div className='flex flex-col gap-2 w-full'>
            <h2 className='font-bold text-[18px] items-center flex justify-between'>
              {item.attributes.doctor.data?.attributes?.Name}
              {!expired && (
                <CancelAppointment onContinueClick={() => onDeleteBooking(item)} />
              )}
            </h2>
            <h2 className='flex gap-2 text-gray-500'>
              <MapPin className='text-primary h-5 w-5' />
              {item.attributes.doctor.data?.attributes?.Address}
            </h2>
            <h2 className='flex gap-2'>
              <Calendar className='text-primary h-5 w-5' /> Appointment On:
              {moment(item.attributes.Date).format('DD-MMM-YYYY')}
            </h2>
            <h2 className='flex gap-2'>
              <Clock className='text-primary h-5 w-5' /> At Time: {item.attributes.Time}
            </h2>
          </div>
        </div>
      )) : (
        <div className='h-[150px] w-full bg-slate-100 animate-pulse rounded-lg'></div>
      )}
    </div>
  );
}

export default BookingList;
