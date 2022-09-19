package services

import "trackr/src/models"

type FieldService interface {
	GetFieldsByProjectAndUser(project models.Project, user models.User) ([]models.Field, error)
	GetFieldByIdAndUser(id uint, user models.User) (*models.Field, error)
	AddField(field models.Field) error
	UpdateField(field models.Field) error
	DeleteFieldByIdAndUser(id uint, user models.User) error
}
