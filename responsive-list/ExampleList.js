function exampleList(){

  const example = []

  example[0] = new SectionBuilder("Willow Tree")
  example[0].appendDefinitionList([
    {
      title: "Willow Tree",
      detail: `Willows, also called sallows, and osiers, form
      the genus Salix, around 400 species of deciduous trees
      and shrubs, found primarily on moist soils in cold
      and temperate regions of the Northern Hemisphere.`
    }
  ])
  example[0].appendUnorderedList(
    [
      "Kingdom - Plantae",
      "Order - Malpighiales",
      "Family - Salicaceae"
    ]
  )

  example[1] = new SectionBuilder("Oak Tree")
  example[1].appendDefinitionList([
    {
      title: "Oak Tree",
      detail: `An oak is a tree or shrub in the genus
      Quercus of the beech family, Fagaceae. There
      are approximately 600 extant species of oaks.
      The common name "oak" also appears in the names
      of species in related genera, notably Lithocarpus
      (stone oaks), as well as in those of unrelated
      species such as Grevillea robusta (silky oaks)
      and the Casuarinaceae (she-oaks).`
    }
  ])
  example[1].appendUnorderedList(
    [
      "Kingdom - Plantae",
      "Order - Fagales",
      "Family - Fagaceae"
    ]
  )

  example[2] = new SectionBuilder("Pine Tree")
  example[2].appendDefinitionList([
    {
      title: "Pine Tree",
      detail: `A pine is any conifer in the genus Pinus,
      of the family Pinaceae. Pinus is the sole genus in
      the subfamily Pinoideae. The Plant List compiled
      by the Royal Botanic Gardens, Kew and Missouri
      Botanical Garden accepts 126 species names of pines
      as current, together with 35 unresolved species
      and many more synonyms.`
    }
  ])
  example[2].appendUnorderedList(
    [
      "Kingdom - Plantae",
      "Order - Pinales",
      "Family - Pinaceae"
    ]
  )

  return example
}
