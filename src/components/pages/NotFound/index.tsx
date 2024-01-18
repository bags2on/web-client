import React from 'react'
import Link from 'next/link'
import ArrowIcon from '../../../../public/assets/icons/expand-arrow.svg'
import classes from './styles.module.scss'
import { useTranslation } from 'next-i18next'
import { routeNames } from '@/utils/navigation'

export function NotFound() {
  const { t, i18n } = useTranslation()

  return (
    <div className={classes.wrapper}>
      <div className={classes.error}>
        <div className={classes.box}></div>
        <h3 className={classes[i18n.language === 'ru' ? 'title' : 'title-ua']}>
          {t('page404.title')}
        </h3>
        <p>
          {t('page404.subTitle1')}{' '}
          <span className={classes[i18n.language === 'ru' ? 'subtitle' : 'subtitle-ua']}>
            {t('page404.subTitle2')}
          </span>{' '}
          {t('page404.subTitle3')}
        </p>
        <p className={classes.actionWrapper}>
          <ArrowIcon className={classes.arrowIcon} />
          <Link className={classes.actionLink} href={routeNames.root}>
            {t('page404.action')}
          </Link>
        </p>
      </div>
    </div>
  )
}
