import React from "react";
import useAxiosSecure from "../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllDeliveryMan = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  const axiosSecure = useAxiosSecure();

  const { data: deliveryMen = [], refetch } = useQuery({
    queryKey: ["deliveryMen"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/deliveryMen");
      return res.data;
    },
  });

  return (
    <div className="px-4 lg:px-24">
      <div className=" text-3xl md:text-4xl text-center font-bold pt-28 lg:pt-44">
        <h2>All DeliveryMen</h2>
      </div>

      <div className="lg:px-16 pt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Delivery Man's Name</th>
                <th>Phone Number</th>
                <th>Number of parcels delivered</th>
                <th>Average review</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {deliveryMen.map((item, index) => (
                <tr key={item.email}>
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.deliveredCount}</td>
                  <td>{parseFloat(item.averageReview.toFixed(2))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllDeliveryMan;
