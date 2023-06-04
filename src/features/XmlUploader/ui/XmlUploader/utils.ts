import { PropertyProps } from 'src/shared/types'
import { TagWithPropertyProps } from '../../types'

export const parseXML = async (file: File): Promise<Document | null> => {
  try {
    const parser = new DOMParser()
    const rawXML = await file.text()
    const xmlDoc = parser.parseFromString(rawXML, 'text/xml')

    return xmlDoc
  } catch (e) {
    return null
  }
}

export const parseProperties = (nodes: Element[]): PropertyProps[] => {
  const properties: PropertyProps[] = []
  nodes.forEach((element) => {
    const name = element.getAttribute('name') || ''
    const description =
      element.querySelector('xml-property')?.getAttribute('value') || ''
    const required = !!element.getAttribute('required')

    properties.push({
      name,
      description,
      required,
    })
  })

  return properties
}

export const parseByTags = <T extends Document, R extends string[] = string[]>(
  domElement: T,
  ...tags: R
): TagWithPropertyProps => {
  const result = {}

  tags.forEach((tag) => {
    const root: Element | null = domElement.querySelector(
      `java-type[name=${tag}]`
    )
    const properties: NodeListOf<Element> | undefined = root?.querySelectorAll(
      "xml-element[type='java.lang.String']"
    )

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    result[tag.toLowerCase()] =
      (properties && parseProperties(Array.from(properties))) || []
  })

  return result as TagWithPropertyProps
}
