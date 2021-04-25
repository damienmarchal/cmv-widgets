  function setNewValue(target, currentValue, newValue, formatter)
  {
    /// We can now start animating things
    $(target).prop('Counter', currentValue).animate({
      Counter: newValue
    },
    {
      duration: 1000,
      easing: 'swing',
      step: function (value)
      {
        $(this).text(formatter(value));
      }
    }
  );
} /// End of setNewValue

totalKm = 0
numberFormatter = new Intl.NumberFormat('fr-FR');

function load(ulilleteams)
{
  $.ajax({
    url: "https://www.naviki.org/naviki/api/v5/Contest/2/findContest/51090",
    dataType: "json",
    cache : false,
    success: function(json)
    {
      totalKm = json.totalKmInsideBoundary
      setNewValue( $("#totalKm"), 0, totalKm, function(value){ return numberFormatter.format(Math.ceil(value)) })
    }
  });

  $.ajax({
    url: "https://www.naviki.org/naviki/api/v5/Contest/findTeams/51090/?offset=0&limit=500",
    dataType: "json",
    cache : false,
    success: function(json)
    {
      teams = {}
      numberOfMembers = 0
      for( i in json.teams )
      {
        teams[json.teams[i]["name"]] = json.teams[i]
        numberOfMembers += parseInt(json.teams[i]["numberOfMembers"])
      }

      totalKmLille = 0.0
      numberOfMembersLille = 0
      for( name in ulilleteams )
      {
        if( name in teams )
        {
          totalKmLille += parseFloat(teams[name]["totalKmInsideBoundary"])
          numberOfMembersLille += parseInt(teams[name]["numberOfMembers"])
          $("#"+ulilleteams[name]).html( teams[name]["numberOfMembers"] + " inscrits, " + teams[name]["totalKmInsideBoundary"] + " Km" )
        }
      }
      $("#spinner").addClass("d-none")
      $("#line1").removeClass("d-none")

      setNewValue( $("#totalKm-lille"), 0, totalKmLille, function(value){ return numberFormatter.format(Math.ceil(value)) })
      setNewValue( $("#numberOfMembers-lille"), 0, numberOfMembersLille, function(value){ return numberFormatter.format(Math.ceil(value)) })
      setNewValue( $("#numberOfTeams-lille"), 0, Object.keys(ulilleteams).length, function(value){ return numberFormatter.format(Math.ceil(value)) })

      setNewValue( $("#totalKm"), 0, totalKm, function(value){ return numberFormatter.format(Math.ceil(value)) })
      setNewValue( $("#numberOfMembers"), 0, numberOfMembers, function(value){ return numberFormatter.format(Math.ceil(value)) })
      setNewValue( $("#numberOfTeams"), 0, json.teams.length, function(value){ return numberFormatter.format(Math.ceil(value)) })
    } /// End of callback
  });
}
