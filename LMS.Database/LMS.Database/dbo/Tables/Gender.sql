CREATE TABLE [dbo].[Gender] (
    [GenderId]     INT          IDENTITY (1, 1) NOT NULL,
    [GenderType]   CHAR (1)     NOT NULL,
    [Description]  VARCHAR (30) NULL,
    [CreatedBy]    VARCHAR (30) NOT NULL,
    [CreatedDate]  DATETIME     NOT NULL,
    [ModifiedBy]   VARCHAR (30) NULL,
    [ModifiedDate] DATETIME     NULL,
    [Active]       BIT          NOT NULL,
    CONSTRAINT [pk_gender_genderId] PRIMARY KEY CLUSTERED ([GenderId] ASC)
);

