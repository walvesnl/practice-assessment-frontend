import { useEffect } from "react";
import { fetchOneSpace } from "../../store/spaces/actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectOneSpace } from "../../store/spaces/selectors";

export default function SpaceDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const space = useSelector(selectOneSpace);

  useEffect(() => {
    dispatch(fetchOneSpace(id));
  }, [dispatch, id]);

  return (
    <div>
      {space !== null ? (
        <div
          style={{ color: space.color, backgroundColor: space.backgroundColor }}
        >
          <h2>{space.title}</h2>
          <h3>{space.description}</h3>

          {[...space.stories]
            .sort(function (a, b) {
              return Date.parse(a.createdAt) - Date.parse(b.createdAt);
            })
            .map((s) => {
              return (
                <div key={s.id}>
                  <h2>{s.name}</h2>
                  <img
                    src={s.imageUrl}
                    alt="nada"
                    style={{ width: 500, height: 400 }}
                  />
                  <p>{s.content}</p>
                </div>
              );
            })}
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}
