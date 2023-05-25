import React, { useState, useEffect } from 'react'
import history from '../../utils/history'
import { List, PaginationItem } from './Pagination.styled'

interface PaginationProps {
  total: number
  currentPage: number
  route: string
}

const Pagination: React.FC<PaginationProps> = ({ total, currentPage, route }) => {
  const [current, setCurrent] = useState<number>(currentPage > total ? total : currentPage)
  const [items, setItems] = useState<(string | number)[]>([])

  const stageItems: (string | number)[] = []

  const handlePaginationChange = (value: number | string): void => {
    if (typeof value === 'number') {
      setCurrent(value)
      history.push(route + `/${value}`)
    }
  }

  const constantSlots = 8

  const isCollapsed = constantSlots <= 6
  const slots = Math.min(constantSlots, total)
  const ellipsisPos: number[] = []
  // let i, showFirst, showLast

  // Center active page in middle of pagination
  let start = current - Math.round(constantSlots / 2) + 1

  // If pagination values exceed the expected range,
  const overflow = start + slots - 1 - total
  if (overflow > 0) start -= overflow
  if (start <= 0) start -= start - 1

  const end = start + slots - 1

  // Check if it should have ellipsis and define sllipsis position
  const hasEllipsisLeft = start > 1
  const hasEllipsisRright = end < total
  if (hasEllipsisLeft) ellipsisPos.push(isCollapsed ? start : start + 1)
  if (hasEllipsisRright) ellipsisPos.push(isCollapsed ? end : end - 1)

  useEffect(() => {
    let i, showFirst, showLast

    for (i = start; i <= end; i++) {
      showFirst = !isCollapsed && i === start && hasEllipsisLeft
      showLast = !isCollapsed && i === end && hasEllipsisRright

      if (showFirst) {
        stageItems.push(1)
      } else if (ellipsisPos.includes(i)) {
        stageItems.push('...')
      } else if (showLast) {
        stageItems.push(total)
      } else {
        stageItems.push(i)
      }
    }
    setItems(stageItems)
  }, [current, total])

  return (
    <section>
      <List>
        {items.map((page, ind) => {
          return (
            <PaginationItem key={ind} $current={current === page} onClick={() => handlePaginationChange(page)}>
              {page}
            </PaginationItem>
          )
        })}
      </List>
    </section>
  )
}

export default Pagination
