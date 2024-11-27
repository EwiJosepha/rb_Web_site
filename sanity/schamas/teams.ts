const Teams = {
  name: "teams",
  title: "Teams",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Teamname",
      type: "string",
    },
    {
      name: "teamsImage",
      type: "image",
      title: "TeamImage",
    },
    {
      name: "position",
      type: "text",
      title: "Position",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      rows: 5,
    },
  ],
};

export default Teams;
