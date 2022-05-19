import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpaceCard from "../../components/SpaceCard";
import { fetchSpaces } from "../../store/spaces/actions";
import { selectSpaces } from "../../store/spaces/selectors";

export default function Homepage() {
  const dispatch = useDispatch();

  const spaces = useSelector(selectSpaces);
  console.log(spaces);
  useEffect(() => {
    dispatch(fetchSpaces);
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>HOME</h1>
      {spaces.map((s) => {
        return (
          <SpaceCard
            key={s.id}
            title={s.title}
            description={s.description}
            backgroundColor={s.backgroundColor}
            color={s.color}
          />
        );
      })}
      <p></p>
    </div>
  );
}
