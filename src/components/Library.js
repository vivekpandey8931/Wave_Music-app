import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({songs,setCurrentSong,isPlaying,setSongs, libraryStatus,audioRef}) => {
    return (
        <div className={`library ${libraryStatus? 'active-library':''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            isPlaying={isPlaying}
            songs={songs}
            cover={song.cover}
            name={song.name}
            artist={song.artist}
            id={song.id}
            key={song.id}
            setSongs={setSongs}
            audioRef={audioRef}
            setCurrentSong={setCurrentSong}
          />
        ))}
      </div>
    </div>
    );
}
export default Library;