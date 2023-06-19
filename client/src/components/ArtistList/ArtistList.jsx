import Artist from "./Artist/Artist";

const ArtistList = ({ artists, paintings }) => {
  return (
    <ul>
      {artists.map((artist) => (
        <Artist key={artist.id} paintings={paintings} />
      ))}
    </ul>
  );
};

export default ArtistList;
