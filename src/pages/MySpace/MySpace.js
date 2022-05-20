import { useSelector, useDispatch } from "react-redux";
import { selectSpace } from "../../store/user/selectors";
import { deleteStory } from "../../store/user/actions";

export default function MySpace() {
  const dispatch = useDispatch();

  const space = useSelector(selectSpace);

  console.log("this space", space);

  const deleteButton = (id) => {
    dispatch(deleteStory(id));
  };

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
                  <button onClick={() => deleteButton(s.id)}>Delete</button>
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
