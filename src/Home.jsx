import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const Home = ({ logged, setLogged }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://randomuser.me/api/?results=10&page=${page}`)
      .then((res) => {
        setContacts((prevContacts) => [...prevContacts, ...res.data.results]);
        setLoading(false);
        setPage(page + 1);
        if (res.data.results.length === 0) {
          setHasMore(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading ||
      !hasMore
    )
      return;
    setPage(page + 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (!logged) {
    return (
      <div className="retry">
        <h1 className="">Please Login and Retry.</h1>
        <Link to="/">
          <h2>Click Here to navigate back to login page.</h2>
        </Link>
      </div>
    );
  }
  return (
    <>
      <Logout toggle={setLogged} />
      <div className="container">
        <ul>
          {contacts.map((contact) => (
            <ContactCard
              key={contact.login.uuid}
              email={contact.email}
              name={contact.name}
              picture={contact.picture.thumbnail}
            />
          ))}
        </ul>
        {loading && <p>Loading...</p>}
      </div>
    </>
  );
};

export default Home;
