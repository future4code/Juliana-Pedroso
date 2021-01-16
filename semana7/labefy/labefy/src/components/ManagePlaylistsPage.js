// import React from "react";
// import ListPlaylistsPage from "./ListPlaylistsPage";
// import DetailsPlaylistsPage from "./DetailsPlaylistsPage";

// export default class ManagePlaylistsPage extends React.Components {
//   state = {
//     page: 'detailsplaylists'
//   };

//   changePage = (page) => {
//     this.setState({ page: page });
//   };

//   render() {
//     const renderPage = () => {
//       if (this.state.page === 'playlists') {
//         return <ListPlaylistsPage changePage={this.changePage} />;
//       } else if (this.state.page === 'detailsplaylists') {
//         return <DetailsPlaylistsPage changePage={this.changePage} />;
//       }
//     };

//     return (
//       <div>
//           {renderPage()}
//       </div>
//     );
//   }
// }
